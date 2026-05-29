const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function insertUser() {
  const connection = await mysql.createConnection({
    host: 'zephyr.proxy.rlwy.net',
    user: 'root',
    password: 'EcFcOwSGrAXzCdqkEhbYqjmmZXPUsXbx',
    database: 'railway',
    port: 29228,
  });

  try {
    // Generate bcrypt hash for 'admin123'
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('admin123', salt);

    const query = `
      INSERT INTO users (
        full_name,
        username,
        email,
        phone,
        role,
        password_hash,
        branch_id,
        pharmacy_id
      ) VALUES (
        'Platform Admin',
        'platformadmin',
        'alamirowner@inu.edu.et',
        '51921991810',
        'PLATFORM_ADMIN',
        ?,
        NULL,
        NULL
      )
    `;

    await connection.execute(query, [hash]);
    console.log('User inserted successfully with password: admin123');
  } catch (error) {
    console.error('Error inserting user:', error.message);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

insertUser();
