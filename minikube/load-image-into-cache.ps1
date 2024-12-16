param($image = $Env:DEFAULT_IMAGE, $tag = $ENV:VERSION)

$cmd = "minikube image load ${image}:${tag}"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
