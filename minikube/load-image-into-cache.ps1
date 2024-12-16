param($image = $Env:DEFAULT_IMAGE, $tag = "latest")

$cmd = "minikube image load ${image}:${tag}"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
