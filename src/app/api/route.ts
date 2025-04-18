// app/api/download-pdf/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Gunakan process.cwd() untuk mendapatkan direktori root proyek
    const filePath = path.join(process.cwd(), 'public', 'pdf', 'CV.pdf');
    
    // Log untuk debugging
    console.log('Mencoba mengakses file di:', filePath);
    
    // Periksa apakah file ada
    if (!fs.existsSync(filePath)) {
      console.error('File tidak ditemukan:', filePath);
      return NextResponse.json({ error: 'PDF file not found' }, { status: 404 });
    }
    
    // Baca file sebagai buffer
    const fileBuffer = fs.readFileSync(filePath);
    
    // Kembalikan file sebagai respons dengan header yang tepat
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; CV.pdf'
      }
    });
  } catch (error) {
    console.error('Error saat mengakses file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}