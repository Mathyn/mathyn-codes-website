param($dryRun = "true")

$helmArguments = ""
if ($dryRun -eq "true") {
    $helmArguments = "--debug --dry-run"
}

$cmd = "helm install $helmArguments -n default mathyn-codes-website ./k8s/mathyn-codes-website"

Write-Host "Executing: $cmd"

Invoke-Expression $cmd