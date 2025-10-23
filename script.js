
const token = "your_token_here";

localStorage.setItem("token", token);



@extends('website.website')
@section('meta')
<meta property="og:title" name="og:title" content="{{isset($pageContent) ? $pageContent->meta_title : ''}}">
<meta name="description" content="{{ isset($pageContent) ? $pageContent->meta_description : '' }}">
<meta name="keywords" content="{{ isset($pageContent) ? $pageContent->meta_keyword : '' }}">
<meta property="og:description" name="og:description" content="{{ isset($pageContent) ? $pageContent->meta_og_description : '' }}">
@endsection
@section('title', isset($pageContent) ? titleString($pageContent->title) : titleString('The Grant Portal'))
@section('content')
@include('website.copypastescript')



<section class="my-10 mx-10 md:mx-32 py-10" style="margin-top: 130px">
    <div>
        <div id="centerZone">
            <div class="TitanStripe StripeNarrow">
                <div class="siteBounds">
                    <div id="centerZone">
                        <div class="TitanStripe StripeNarrow">
                            <div class="siteBounds">
                                {!! isset($pageContent) ? $pageContent->description : '' !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

   hdidi



@php
    $email= "your email"; 
@endphp



<iframe
    src="https://ai-chat-bot-five-sooty.vercel.app/?email={{ $email}}"
    title="AI Chatbot"
    style="position: fixed; bottom: 20px; right: 20px; width: 500px; height: 1000px; border: none; z-index: 9999; background: transparent;"
    allow="clipboard-read; clipboard-write"
    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
></iframe>



@endsection
 