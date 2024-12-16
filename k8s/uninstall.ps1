param($namespace = $Env:DEFAULT_NAMESPACE)

$cmd = "helm uninstall -n $namespace mathyn-codes-website"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
