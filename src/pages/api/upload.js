import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const filename = formData.get('filename');

    if (!file || !filename) {
      return new Response(JSON.stringify({ error: 'File and filename are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create the products directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'product');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save file to public/product directory
    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, buffer);

    return new Response(JSON.stringify({ 
      success: true, 
      filename,
      url: `/product/${filename}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}