$packages = @{
"MadsKristensen.AspNetCore.Miniblog" = "1.0.3"
"MadsKristensen.AspNetCore.PhotoGallery" = "1.0.0"
}

Push-Location
cd build

# Delete all existing .nupkg files
dir ..\src\*.nupkg | foreach {del $_}

foreach	($name in $packages.Keys){
	$version = $packages.$name
	$url = "https://www.nuget.org/api/v2/package/$name/$version"
	$output = ".\$name.$version.nupkg"
	write-host $output
	Invoke-WebRequest -Uri $url -OutFile $output
}

Pop-Location