const express = require('express');
const { google } = require('googleapis');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000; // Choose a suitable port

// Middleware
app.use(cors());
app.use(express.json());

// Set up Multer to handle file uploads (if needed)

const apiKey = 'AIzaSyAKVNa6mevpuZ_Sxi3kA3ZutjpNCsSJo7Q';
// Create a Google Drive client
const drive = google.drive({ version: 'v3' });

// Define a route to fetch Engagment image URLs
app.get('/Traditionalimages', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'12vpU3Q8H8lZ2snKaTWbHUlQg5pUrCaqF' in parents`, // Replace with your Drive folder ID
      fields: 'files(id, name, webContentLink, thumbnailLink, mimeType)',
      key: apiKey, // Include the API Key directly
    });

    const imageLinks = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      webContentLink: file.webContentLink.replace(/&export=download$/, ''),
      webViewLink: file.webViewLink,
      thumbnailLink: file.thumbnailLink,
      mimeType: file.mimeType, // Add the mimeType property
    }));

    // Check if there are images in the response
    if (imageLinks.length > 0) {
      // Set the appropriate Content-Type header based on the first image's mimeType
      res.set('Content-Type', imageLinks[0].mimeType);
    }
    res.json(imageLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});



// Define a route to fetch Church & Reception image URLs
app.get('/Whiteimages', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'1zo-HgLVsbbDumK6imaTDStD1AGdDtElZ' in parents`, // Replace with your Drive folder ID
      fields: 'files(id, name, webContentLink, thumbnailLink, mimeType)',
      key: apiKey, // Include the API Key directly
    });

    const imageWhiteLinks = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      webContentLink: file.webContentLink.replace(/&export=download$/, ''),
      webViewLink: file.webViewLink,
      thumbnailLink: file.thumbnailLink,
      mimeType: file.mimeType, // Add the mimeType property
    }));

    // Check if there are images in the response
    if (imageWhiteLinks.length > 0) {
      // Set the appropriate Content-Type header based on the first image's mimeType
      res.set('Content-Type', imageWhiteLinks[0].mimeType);
    }
    res.json(imageWhiteLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});


// Define a route to fetch Introduction image URLs
app.get('/TakeHomeimages', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'12iwL6bSJw_jgP-O3PNmxzhO1xesB1VbR' in parents`, // Replace with your Drive folder ID
      fields: 'files(id, name, webContentLink, thumbnailLink, mimeType)',
      key: apiKey, // Include the API Key directly
    });

    const imageTakeHomeLinks = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      webContentLink: file.webContentLink.replace(/&export=download$/, ''),
      webViewLink: file.webViewLink,
      thumbnailLink: file.thumbnailLink,
      mimeType: file.mimeType, // Add the mimeType property
    }));

    // Check if there are images in the response
    if (imageTakeHomeLinks.length > 0) {
      // Set the appropriate Content-Type header based on the first image's mimeType
      res.set('Content-Type', imageTakeHomeLinks[0].mimeType);
    }
    res.json(imageTakeHomeLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

// Define a route to fetch Pre Wedding Shoot image URLs
app.get('/ShowOFFimages', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'1DNpsCpp680s4Jyp2cqXQwPUNoR4PZTbD' in parents`, // Replace with your Drive folder ID
      fields: 'files(id, name, webContentLink, thumbnailLink, mimeType)',
      key: apiKey, // Include the API Key directly
    });

    const imageShowOFFLinks = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      webContentLink: file.webContentLink.replace(/&export=download$/, ''),
      webViewLink: file.webViewLink,
      thumbnailLink: file.thumbnailLink,
      mimeType: file.mimeType, // Add the mimeType property
    }));

    // Check if there are images in the response
    if (imageShowOFFLinks.length > 0) {
      // Set the appropriate Content-Type header based on the first image's mimeType
      res.set('Content-Type', imageShowOFFLinks[0].mimeType);
    }
    res.json(imageShowOFFLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});


// Define a route to fetch Video Shoot image URLs
app.get('/ShowOFFimages', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'1DNpsCpp680s4Jyp2cqXQwPUNoR4PZTbD' in parents`, // Replace with your Drive folder ID
      fields: 'files(id, name, webContentLink, thumbnailLink, mimeType)',
      key: apiKey, // Include the API Key directly
    });

    const imageShowOFFLinks = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      webContentLink: file.webContentLink.replace(/&export=download$/, ''),
      webViewLink: file.webViewLink,
      thumbnailLink: file.thumbnailLink,
      mimeType: file.mimeType, // Add the mimeType property
    }));

    // Check if there are images in the response
    if (imageShowOFFLinks.length > 0) {
      // Set the appropriate Content-Type header based on the first image's mimeType
      res.set('Content-Type', imageShowOFFLinks[0].mimeType);
    }
    res.json(imageShowOFFLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
