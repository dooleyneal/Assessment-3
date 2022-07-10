console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#submit');

form.addEventListener('click', function() {
	alert('Form has been submitted.')
	});

let image = document.querySelector('img')
image.addEventListener('mouseover', function() {
	alert('You\'re so good at petting the cat!')
})