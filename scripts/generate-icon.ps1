Add-Type -AssemblyName System.Drawing
$iconDirectory = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../build'))
[System.IO.Directory]::CreateDirectory($iconDirectory) | Out-Null
$bitmap = New-Object System.Drawing.Bitmap 256, 256
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$rectangle = New-Object System.Drawing.Rectangle 8, 8, 240, 240
$blue = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rectangle, ([System.Drawing.Color]::FromArgb(64, 179, 255)), ([System.Drawing.Color]::FromArgb(0, 103, 244)), 65
$graphics.FillEllipse($blue, $rectangle)
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$points = [System.Drawing.PointF[]]@(
  (New-Object System.Drawing.PointF 94, 205), (New-Object System.Drawing.PointF 88, 175),
  (New-Object System.Drawing.PointF 60, 131), (New-Object System.Drawing.PointF 65, 118),
  (New-Object System.Drawing.PointF 78, 122), (New-Object System.Drawing.PointF 94, 144),
  (New-Object System.Drawing.PointF 85, 73), (New-Object System.Drawing.PointF 89, 64),
  (New-Object System.Drawing.PointF 99, 65), (New-Object System.Drawing.PointF 110, 126),
  (New-Object System.Drawing.PointF 113, 53), (New-Object System.Drawing.PointF 120, 46),
  (New-Object System.Drawing.PointF 130, 50), (New-Object System.Drawing.PointF 130, 124),
  (New-Object System.Drawing.PointF 143, 62), (New-Object System.Drawing.PointF 151, 57),
  (New-Object System.Drawing.PointF 159, 63), (New-Object System.Drawing.PointF 148, 131),
  (New-Object System.Drawing.PointF 167, 88), (New-Object System.Drawing.PointF 176, 83),
  (New-Object System.Drawing.PointF 184, 92), (New-Object System.Drawing.PointF 169, 153),
  (New-Object System.Drawing.PointF 156, 184), (New-Object System.Drawing.PointF 155, 205)
)
$path.AddPolygon($points)
$graphics.FillPath([System.Drawing.Brushes]::White, $path)
$stream = New-Object System.IO.MemoryStream
$bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
$png = $stream.ToArray()
[System.IO.File]::WriteAllBytes((Join-Path $iconDirectory 'icon.png'), $png)
$file = [System.IO.File]::Create((Join-Path $iconDirectory 'icon.ico'))
$writer = New-Object System.IO.BinaryWriter $file
$writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]1)
$writer.Write([byte]0); $writer.Write([byte]0); $writer.Write([byte]0); $writer.Write([byte]0)
$writer.Write([uint16]1); $writer.Write([uint16]32); $writer.Write([uint32]$png.Length); $writer.Write([uint32]22)
$writer.Write($png)
$writer.Dispose(); $stream.Dispose(); $path.Dispose(); $blue.Dispose(); $graphics.Dispose(); $bitmap.Dispose()
