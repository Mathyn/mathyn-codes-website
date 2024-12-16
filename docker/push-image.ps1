param($image = $Env:DEFAULT_IMAGE, $tag = $Env:VERSION)

$cmd = "docker push ${image}:${tag}"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
