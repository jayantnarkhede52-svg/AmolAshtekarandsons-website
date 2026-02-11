$source = "assets\images\web images"
$destBase = "assets\images\gallery"

# Get all jpg files
$files = Get-ChildItem -Path $source -Filter "*.jpg" | Sort-Object Name

# Select 60 files
$selected = $files | Select-Object -First 60

# Split into 3 groups
$necklaces = $selected[0..19]
$bangles = $selected[20..39]
$rings = $selected[40..59]

# Copy Necklaces
foreach ($file in $necklaces) {
    Copy-Item $file.FullName -Destination "$destBase\necklaces"
}

# Copy Bangles
foreach ($file in $bangles) {
    Copy-Item $file.FullName -Destination "$destBase\bangles"
}

# Copy Rings
foreach ($file in $rings) {
    Copy-Item $file.FullName -Destination "$destBase\rings"
}

Write-Host "Images distributed successfully."
