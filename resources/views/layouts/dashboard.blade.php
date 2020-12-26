<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Stock Manager</title>
    <base href="{{url("/")}}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <link rel="stylesheet" href="{{mix("css/app.css")}}">
    @routes
    @include('ckfinder::setup')

    <script defer src="{{ mix('js/app-client.js') }}"></script>
</head>
<body class="h-100" style="overflow-x: hidden;">
<div id="app"></div>

{{--{!!--}}
{{--    ssr('js/app-server.js')--}}
{{--    ->fallback('<div id="app"></div>')--}}
{{--    ->render()--}}
{{--!!}--}}

<form id="logout-form" style="display: none" method="post" action="{{route('logout')}}">@csrf</form>
</body>
</html>