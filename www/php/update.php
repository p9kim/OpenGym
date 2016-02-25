<?php
	//error_reporting( E_ALL );
	//echo $_GET["term"];

	$data = json_decode(file_get_contents("data.json"));
	$data = $data->gyms;
	$results = array();
	foreach($data as $d)
	{
		if(stripos($d->address, $_GET["term"]) !== false)
			$results[] = $d;
	}

?>