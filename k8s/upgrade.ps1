param($dryRun = "true", $local = "true", $namespace = $Env:DEFAULT_NAMESPACE, $tag = $Env:VERSION)

$protocol = "https"
if ($local -eq "true") {
    $protocol = "http"
}

$helmArguments = "--set protocol=$protocol --set image.tag=${tag}"

if ($dryRun -eq "true") {
    # Append
    $helmArguments = "$helmArguments --debug --dry-run"
}

$cmd = "helm upgrade -n $namespace mathyn-codes-website ./k8s/mathyn-codes-website $helmArguments"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd
