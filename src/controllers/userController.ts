import { Request, Response } from 'express';
import { query } from '../db';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error32' });
  }
};


export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body; // اطلاعات کاربر از درخواست دریافت می‌شود

  // بررسی کنید که آیا نام و ایمیل ارائه شده است یا خیر
  // if (!name || !email) {
  //   return res.status(400).json({ error: 'Name and email are required' });
  // }

  try {
    // استفاده از query برای ایجاد کاربر جدید
    const result = await query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    const newUser = result.rows[0]; // کاربر جدید که ایجاد شده را دریافت کنید
    res.status(201).json(newUser); // برگرداندن کاربر جدید به عنوان پاسخ
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};