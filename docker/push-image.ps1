param($image = $Env:DEFAULT_IMAGE, $tag = "latest")

$cmd = "docker push ${image}:${tag}"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
