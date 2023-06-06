
* variables // prefix with $    

            $primary-color: blue;
* nesting 
            
            nav{
                ul{
                    margin:0;
                }
            }
* modules 

        importing 
        file must be with _name.scss
        @import "name";

* mixin & functions

        mixin don't have return 
        function must return and don't require @include
        function can be nested in mixin
        @mixin nameOfMixin(){}
        @function(){}

        for mixin 
        .box{ @include nameOfMixin() }

* inheritance

        %message-shared{
            padding:10px;
        }

        .message{
             @extend %message-shared;
        }
        .success{
               @extend %message-shared;
               background-color:green;
        }
        .error{
               @extend %message-shared;
               background-color:red;

        }

* operators 

        .container { width:100%}

        article[role="main"]{
            float:left;
            width: 600px / 960px*100%;
        }

*Conditionals

        @if $direction = up {}
        @else if $direction = right {}
        @else {}