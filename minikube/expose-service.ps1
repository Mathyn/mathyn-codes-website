param($namespace = $Env:DEFAULT_NAMESPACE)

$cmd = "minikube service -n $namespace mathyn-codes-website-service --url"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
