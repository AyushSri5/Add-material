<template>
    <div class="start-learning">
        <div class="container-fluid px-0">
            <div class="start-learning-header">
                <a target="_blank" href="">
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                    <span class="sr-only">Go to Help Page (Opens in New Tab)</span>
                </a>
                <h1 class="font-xs"> Start learning </h1>
                <a @click="handleClick()">
                    <i class="nemo-font nemo-cross fa fa-times" aria-hidden="true"></i>
                    <span class="sr-only">Go to Learner Dashboard Page</span>
                </a>
            </div>
            <div class="row-wrapper content-div">
                <slot />
            </div>
        </div>
    </div>
    

</template>

<script setup>

</script>

<style lang="scss">

@import "../assets/scss/helper.scss";
.start-learning {
    background-color: var(--cup-main-color-1);
    background-color: #8723ff;
    min-height: 100%;
    .container-fluid {
        min-height: 100%;
    }
    a {
        color: var(--cup-general-color-1);
        color: white;
    }
    .start-learning-header {
        display: flex;
        height: 56px;
        color: var(--cup-general-color-1);
        color: white;
        align-items: center;
        padding: 0 16px;
        @include media-breakpoint-up(md) {
            padding: 0 24px;
        }
        @include media-breakpoint-up(lg) {
            padding: 0 32px;
        }
        h1 {
            margin: auto;
        }
        a {
            font-size: 20px;
        }
    }
    .content-div {
        color: var(--cup-general-color-1);
        color: white;
        align-items: center;
        @include media-breakpoint-up(md) {
             height: calc(100% - 56px);
             .row {
                 height: 100%;
             }
        }   
        @include media-breakpoint-up(lg) {
            margin-top: 20px;
            justify-content: flex-start;
        }
        .product-activation-code, section {
            text-align: center;
            border-bottom: solid 1px var(--cup-general-color-1);
            border-bottom : 1px solid white;
            padding: 30px 0;
            &:first-child {
                @include media-breakpoint-up(md) {
                    padding-top: 35%;
                } 
                @include media-breakpoint-up(lg) {
                    padding-top: 30px;
                }   
            }
            &:last-child {
                border-bottom: 0 none;
            }
            a,button {
                padding: 10px 0;
            }
            .heading2 {
                font-size: 14px;
                line-height: 16px;
                font-weight: 600;
                letter-spacing: 0.5px;
                a {
                    color: var(--cup-general-color-1);
                    color: white;
                }
            }
            .page-icon {
                font-size: 3em;
                color:var(--cup-general-color-1);
                color: white;
                margin: 40px 0;
            }
            .btn-icon {
                padding: 14px 20px 14px 25px;
                i {
                    font-size: 20px;
                    margin-left: 10px;
                }
            }
            .text-underline {
                text-decoration: underline;
            }
            .btn {
                &.disabled {
                    opacity: 0.5;
                    background-color: var(--cup-general-color-1);
                    background-color: white;
                    color: var(--cup-main-color-1);
                    color: #8723ff;
                    cursor: default;
                }
            }
        }
    }
    .emphasize-text {
        font-size: 18px;
        line-height: 24px;
        &:first-child {
            margin-bottom: 0;
        }
    }
}

//Styles that aren't getting applied or are getting over-ridden or are coming from various other sources in dashboard
.start-learning{
    min-height: 100vh;
    font-family:Muli, sans-serif;
}
.font-xs{
    font-size: 12px;
    line-height: 14px;
}

.fa{
    font-size : 14px;
}

.btn-white-bg{
    color : #8723ff !important;
    background-color : white !important;
}

.col-xl-8, .col-md-10{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px !important;
    padding-left: 15px !important;
}

.row{
    margin: 0 !important;
}

.product-activation-code .page-icon{
    margin : 0 0 24px !important;
    @include media-breakpoint-up(lg){
        margin : 40px 0 !important;
    }
}
</style>