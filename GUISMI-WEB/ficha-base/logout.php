<?php
	session_start();
	session_destroy();
	
	echo "	
			<script> 
				alert('Você saiu!');
				window.location = 'index.php';
			</script>
		";
	exit;