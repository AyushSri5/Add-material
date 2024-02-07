import { ref } from 'vue';

export const useCardInput = (disable) => {
  const formattedCardNumber = ref('');

  const handleInput = (event) => {
    const { value } = event.target;
    // if(value.length>0){
    // disable.value=false;
    // }
    
    // const formattedValue = value.replace(/\B(?=(\d{4})+(?!\d))/g, '-');
    let formattedValue=value.replace(/\s/g,'').split('-').join('');
    if(formattedValue.length>0){
      formattedValue=formattedValue.match(new RegExp('.{1,4}', 'g')).join('-');
    }
    formattedCardNumber.value =new String(formattedValue);
    return new String(formattedValue);
  };

  return { formattedCardNumber, handleInput };
};