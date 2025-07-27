import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Función de registro con diagnósticos
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };

    // --- INICIO DE DIAGNÓSTICO ---
    const secret = process.env.JWT_SECRET;
    console.log("Usando JWT_SECRET para firmar:", secret ? `"${secret.substring(0, 5)}..."` : "INDEFINIDO (undefined)");

    if (!secret) {
      console.error("¡ERROR FATAL! La variable JWT_SECRET no está definida. Revisa tu archivo .env y la configuración del servidor.");
      return res.status(500).send('Error de configuración del servidor: JWT Secret no encontrado.');
    }
    // --- FIN DE DIAGNÓSTICO ---

    jwt.sign(
      payload,
      secret, // Usamos la variable que ya verificamos
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Error en el controlador de registro:", err.message);
    res.status(500).send('Error del servidor');
  }
};

// Función de login con diagnósticos
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const payload = { user: { id: user.id } };

    // --- INICIO DE DIAGNÓSTICO ---
    const secret = process.env.JWT_SECRET;
    console.log("Usando JWT_SECRET para firmar:", secret ? `"${secret.substring(0, 5)}..."` : "INDEFINIDO (undefined)");

    if (!secret) {
      console.error("¡ERROR FATAL! La variable JWT_SECRET no está definida. Revisa tu archivo .env y la configuración del servidor.");
      return res.status(500).send('Error de configuración del servidor: JWT Secret no encontrado.');
    }
    // --- FIN DE DIAGNÓSTICO ---

    jwt.sign(
      payload,
      secret,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Error en el controlador de login:", err.message);
    res.status(500).send('Error del servidor');
  }
};