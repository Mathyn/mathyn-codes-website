param($image = $Env:DEFAULT_IMAGE, $tag = "latest")

$cmd = "docker build -t ${image}:${tag} -f ./docker/Dockerfile ."

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
