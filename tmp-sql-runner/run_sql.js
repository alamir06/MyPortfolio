const fs = require('fs');
const mysql = require('mysql2/promise');

async function run() {
  const connection = await mysql.createConnection({
    host: 'zephyr.proxy.rlwy.net',
    user: 'root',
    password: 'EcFcOwSGrAXzCdqkEhbYqjmmZXPUsXbx',
    database: 'railway',
    port: 29228,
  });

  const sqlPath = 'd:/Projects/PMS/Pharmacy-Management-System/backend/databaseSQL.sql';
  let sqlQuery = fs.readFileSync(sqlPath, 'utf8');

  // Let's implement a simple parser for DELIMITER
  let currentDelimiter = ';';
  let statements = [];
  let currentStatement = '';
  
  const lines = sqlQuery.split('\n');
  for (let line of lines) {
    if (line.trim().toUpperCase().startsWith('DELIMITER ')) {
      currentDelimiter = line.trim().split(' ')[1];
      continue;
    }
    
    currentStatement += line + '\n';
    
    if (line.trim().endsWith(currentDelimiter)) {
      const trimmed = currentStatement.trim();
      const stmt = trimmed.substring(0, trimmed.length - currentDelimiter.length);
      if (stmt.trim()) {
        statements.push(stmt);
      }
      currentStatement = '';
    }
  }
  
  if (currentStatement.trim()) {
    statements.push(currentStatement.trim());
  }

  console.log(`Found ${statements.length} statements.`);
  
  // Execute sequentially
  for (let i = 0; i < statements.length; i++) {
    try {
      await connection.query(statements[i]);
    } catch (e) {
      console.error(`Error at statement ${i+1}:`, e.message);
      console.error(statements[i].substring(0, 500) + '...');
      process.exit(1);
    }
  }

  console.log('SQL script executed successfully.');
  await connection.end();
}

run().catch(console.error);
