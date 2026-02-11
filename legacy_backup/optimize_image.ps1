
Add-Type -AssemblyName System.Drawing

$inputPath = "c:\work\Jewellery website AA & Sons\assets\images\welcome_lady_graphic.png"
$outputPath = "c:\work\Jewellery website AA & Sons\assets\images\welcome_lady_graphic_opt.png"

try {
    if (-not (Test-Path $inputPath)) {
        Write-Error "File not found: $inputPath"
        exit 1
    }

    $img = [System.Drawing.Image]::FromFile($inputPath)
    Write-Host "Original Dimensions: $($img.Width)x$($img.Height)"

    if ($img.Width -gt 1000) {
        $newWidth = 1000
        $newHeight = [int]($img.Height * ($newWidth / $img.Width))
        
        $resizedCallback = { return $false }
        $resized = $img.GetThumbnailImage($newWidth, $newHeight, $resizedCallback, [IntPtr]::Zero)
        
        # Save as PNG
        $resized.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $origSize = (Get-Item $inputPath).Length
        $newSize = (Get-Item $outputPath).Length
        
        Write-Host "Original Size: $origSize bytes"
        Write-Host "New Size: $newSize bytes"
        
        $img.Dispose()
        $resized.Dispose()
        
        if ($newSize -lt $origSize) {
            Move-Item -Path $outputPath -Destination $inputPath -Force
            Write-Host "Image optimized and replaced."
        }
        else {
            Remove-Item $outputPath
            Write-Host "Optimization did not reduce size. Kept original."
        }
    }
    else {
        Write-Host "Image width is already <= 1000px. Skipping resize."
        $img.Dispose()
    }
}
catch {
    Write-Error "Error: $_"
    exit 1
}
