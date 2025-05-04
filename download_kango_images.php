<?php
// Script to download images for the KANGO-style login page

// Function to download an image from URL and save it to the specified path
function downloadImage($url, $path) {
    $ch = curl_init($url);
    $fp = fopen($path, 'wb');
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
    echo "Downloaded: " . $path . "<br>";
}

// Create directories if they don't exist
if (!file_exists('images')) {
    mkdir('images', 0777, true);
}

// Images to download
$images = [
    'https://www.transparenttextures.com/patterns/cubes.png' => 'images/pattern.png',
    'https://images.unsplash.com/photo-1508615070457-7baeba4003ab' => 'images/backgrounds/nature-bg.jpg', // Nature image with solar panels
    'https://cdn-icons-png.flaticon.com/512/4052/4052984.png' => 'images/kango-logo.png' // Solar energy icon
];

// Download all images
echo "<h2>Downloading Images for KANGO-style Login</h2>";
foreach ($images as $url => $path) {
    downloadImage($url, $path);
}

echo "<h2>All images downloaded successfully!</h2>";
?> 