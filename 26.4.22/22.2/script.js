const checkbox = document.querySelector('input');
const photoUrl = 'https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/1/8/6/0/1860714-46.jpg'

checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
    const img = document.createElement('img');
    img.src = photoUrl;
    const div = document.querySelector('div');
    div.appendChild(img);


    } else {
      console.log("Checkbox is not checked..");
      const div = document.querySelector('div');
      const img = document.querySelector('img');
      div.removeChild(img);

    }
  });
