<%@ include file="include.jsp" %>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="styleSheet"><spring:theme code="styleSheet"/></c:set>
<link rel="apple-touch-icon" sizes="180x180" href="<c:url value='/icons/apple-touch-icon.png'/>"/>
<link rel="icon" type="image/png" sizes="32x32" href="<c:url value='/icons/favicon-32x32.png'/>"/>
<link rel="icon" type="image/png" sizes="16x16" href="<c:url value='/icons/favicon-16x16.png'/>"/>
<link rel="manifest" href="<c:url value='/icons/site.webmanifest'/>"/>
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="description" content="Booksonic: A free, web-based media streamer, providing ubiquitous access to your audiobooks.">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Included before airsonic stylesheet to allow overriding -->
<link type="text/css" rel="stylesheet" href="<c:url value='/script/mediaelement/mediaelementplayer.min.css'/>">
<link rel="stylesheet" href="<c:url value='/${styleSheet}'/>" type="text/css">
<title>Booksonic</title>

<script id="preferencesConfig" type="application/x-configuration">
  {
    "keyboardShortcutsEnabled": ${model.keyboardShortcutsEnabled ? 'true' : 'false'}
  }
</script>
<script defer type="text/javascript" src="<c:url value='/script/mousetrap-1.6.0.js'/>"></script>
<script defer type="text/javascript" src="<c:url value='/script/keyboard_shortcuts.js'/>"></script>
