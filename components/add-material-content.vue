<template>
    
     <main class="product-activation-code">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book page-icon" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
            <h2 class="heading2">I have an activation code</h2>
            <form class="content-div-body mt-5">
                <div class="form-group">
                    <label class="font-xs" for="activationCodeInput">Enter activation code</label>
                    <div class="input-group">
                        <input autocomplete="off"  type="text"  
                        v-model="formattedCardNumber"
                        @input="processInput"
                        name="activationCode" 
                        placeholder="E.g. AB2C-DE3F-G4HJ-K5LM"
                        required  class="form-control form-control-lg focus-visible"  id="activationCodeInput" >
                        <div class="input-group-append" v-if="errormessage">
                            <span class="input-group-text error"><i class="nemo-error-icon nemo-font nemo-warning" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <p class="font-xs error-message" v-if="errormessage">
                        Sorry, this isn't a valid code. Please check and try again
                    </p>
                </div>
                <p class="text-center">
                    <button type="submit"  @click.prevent="submitInput()"  class="btn btn-lg btn-white-bg btn-icon submit-activation-code" :class="{'disabled':disable}" 
                    :aria-disabled="disable"
                    >
                       Activate <i class="fa fa-angle-right"  aria-hidden="true"></i>
                       <span>
                            <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
                            <span class="sr-only">{{'SCREEN_READER.PROCESSING_MESSAGE' | translate}}</span>
                        </span>                        
                    </button>
                </p>
                <p class="text-center"><a @click="() => flag=1"  class="font-xs text-underline code-not-found"> Where do i find the code</a> </p>
            </form>
        </main>
    
</template>

<script setup>

// import {useCardInput} from "@/composables/useCardInput.js"

const flag=useState('navigation-State');

const formattedCardNumber=ref('');
const disable=ref(true);
const errormessage=ref(false);
const activationloader=ref(false);

// const flag=useState('add-material-flag');
const {  handleInput } =useCardInput(disable);

const processInput=(event) => {
    const { value } = event.target;
    formattedCardNumber.value=handleInput(event);
    if(value.length >0){
        disable.value=false;
    }
    // else{
    //     disable.value=true;
    // }
}


const submitInput=() => {
    if(formattedCardNumber.value.length<=0){
        errormessage.value=true;
    }
    console.log(formattedCardNumber.value);
}

// const activationCodeValue : String = '';
//   isActivationCodeError : boolean = false;
//   showActivationCodeCheckLoader : boolean = false;
//   firstTime : string;
//   activatingProduct: string; // true:will show 'Learn' on success page else 'Learn on  my own'
//   productData: any = {};
//   userData: any;
//   navigationState : number = 1
//   activationError = {
//     message: "",
//     details: {}
//   }

</script>

<style lang="scss" >
@import "../assets/scss/helper.scss";
body{
    background-color: #8723ff;
}
.code-not-found {
    font-weight: 800;
    letter-spacing: 0.5px;
}
.product-activation-later.disabled {
    opacity: 0.4;
    pointer-events: none;
}
.product-activation-code .page-icon{
    margin:0 0 24px;
    @include media-breakpoint-up(lg) {
        margin:40px 0;
    }
}
form {
    text-align: left;
    max-width: 85%;
    margin: 0 auto;
    @include media-breakpoint-up(sm) {
        max-width: 46%;
    }
    @include media-breakpoint-up(lg) {
        max-width: 35%;
    }
    label {
        margin-bottom: 0;
        color: #F5F5F5;
        font-size: 12px;
        line-height: 14px;
    }
    .input-group {
        border-bottom: solid 2px #323232;
    }
    input[type="text"] {
        color: #323232;
        font-size: 16px;
        line-height: 24px;
        border: 0 none;
        background-color: #F5F5F5;
        border-bottom: 2px solid #F5F5F5;
        box-shadow: none;
        border-radius: 2px 2px 0 0;
        padding-right: 25px;
        &:-ms-input-placeholder {
            color: #999999;
        }
    }
    input:focus{

    }
    .submit-activation-code {
        &.submit-loader-btn {
            padding-right:15px;
            i {
                line-height: 20px;
                font-size: 17px;
                margin-left: 5px;
            }
        }
    }
    .form-group {
        margin-bottom: 32px;
    }
    .required-error {
        margin-top:5px;
        padding:5px 20px;
    }
    .input-group-text {
        background: #F5F5F5;
        border: 0 none;
        border-radius: 2px;
        i {
            font-size: 1.5em;
        }
    }
    p {
        margin-bottom: 10px;
    }
    .error {
         color: #dc3545;
         border-bottom: solid 2px #B90000;
         margin-bottom: -2px;
         &.form-control {
             color: #323232;
         }
    }
    .error-message {
        color:#F5F5F5;
        margin-top: 8px;
    }
}
.start-learning {
    background-color: #8723ff;
    min-height: 100%;
    .container-fluid {
        min-height: 100%;
    }
    a {
        color: #FFFFFF;
    }
    .start-learning-header {
        display: flex;
        height: 56px;
        color: #FFFFFF;
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
        color: #FFFFFF;
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
            border-bottom: solid 1px #FFFFFF;
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
                    color: #FFFFFF;
                }
            }
            .page-icon {
                font-size: 3em;
                color:#FFFFFF;
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
                    background-color: #FFFFFF;
                    color: #8723ff;
                    cursor: default;
                }
            }
            .btn-white-bg{
                background-color: #ffffff;
                color: #8723ff;
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
@media (min-width: 1280px){
    .col-xl-8{
        flex: 0 0 66.6666666667%;
    }
.offset-xl-2.col-xl-8.offset-md-1.col-md-10{
    max-width: 66.67%;
    margin-left: 16.67%;

}
}
@media (min-width: 768px){
.offset-md-1{
    max-width: 83.33%;
    margin-left: 8.33%;
}
}
</style>