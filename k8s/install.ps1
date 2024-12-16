param($dryRun = "true", $local = "true", $namespace = $Env:DEFAULT_NAMESPACE)

$protocol = "https"
if ($local -eq "true") {
    $protocol = "http"
}

$helmArguments = "--set protocol=$protocol"

if ($dryRun -eq "true") {
    # Append
    $helmArguments = "$helmArguments --debug --dry-run"
}

$cmd = "helm install -n $namespace mathyn-codes-website ./k8s/mathyn-codes-website $helmArguments"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd