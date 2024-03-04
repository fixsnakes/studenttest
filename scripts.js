const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
    
});



function showAllExams() {
	
    const examTypeSelect = document.getElementById('examType');
    
    const examData = [
        { name: 'Bài Thi 1', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 2', date: '2024-03-15', status: 'Chưa mở' },
        { name: 'Bài Thi 3', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 4', date: '2024-03-25', status: 'Chưa mở' },
        { name: 'Bài Thi 5', date: 'Tự Do', status: 'Bắt Đầu Làm' },
		{ name: 'Bài Thi 6', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 7', date: '2024-03-15', status: 'Chưa mở' },
        { name: 'Bài Thi 8', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 9', date: '2024-03-25', status: 'Chưa mở' },
        { name: 'Bài Thi 10', date: 'Tự Do', status: 'Bắt Đầu Làm' },
    ];
    
    const examData1 = [
        { name: 'Bài Thi 1', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 2', date: '2024-03-15', status: 'Chưa mở' },
    ];
    
    const examData2 = [
        { name: 'Bài Thi 1', date: '2024-03-10', status: 'Chưa mở' },
		{ name: 'Bài Thi 2', date: '2024-03-15', status: 'Chưa mở' },
        { name: 'Bài Thi 3', date: 'Tự Do', status: 'Bắt Đầu Làm' },
        { name: 'Bài Thi 4', date: '2024-03-25', status: 'Chưa mở' },
        { name: 'Bài Thi 5', date: 'Tự Do', status: 'Bắt Đầu Làm' },,
    ];

    // Get the selected value from the dropdown
    const selectedType = examTypeSelect.value;
    
    // Call the createExamTable function with the appropriate data
    if (selectedType === "practice") {
        createExamTable(examData);
    } else if (selectedType === "midTerm") {
        createExamTable(examData1);
    } else if (selectedType === "finalTerm") {
        createExamTable(examData2);
    }
}

// Function to create exam table based on given data
function createExamTable(examData) {
    const tableBody = examTable.querySelector('tbody');
    tableBody.innerHTML = '';

    for (let i = 0; i < examData.length; i++) {
        const exam = examData[i];
        const name = exam.name;
        const date = exam.date;
        const status = exam.status;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${date}</td>
            <td>${createStartButton(status)}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createStartButton(exam) {
	if(exam == "Bắt Đầu Làm"){
		const startButton = document.createElement('a');
		startButton.href = 'quiz.html';  // Thay đổi đường dẫn tùy theo yêu cầu
		startButton.innerText = 'Bắt Đầu Làm';
		startButton.style.backgroundColor = '#4CAF50';
		startButton.style.color = 'white';
		startButton.style.textDecoration = 'none';
		startButton.style.borderRadius = '10px';  // Điều chỉnh giá trị theo ý muốn
		startButton.style.padding = '8px 15px';  // Điều chỉnh giá trị theo ý muốn
		startButton.style.border = '2px solid white';  // Điều chỉnh giá trị theo ý muốn
		return startButton.outerHTML;
	}

    else{
		const startButton = document.createElement('a');
		startButton.href = 'quiz.html';  // Thay đổi đường dẫn tùy theo yêu cầu
		startButton.innerText = 'Chưa Mở';
		startButton.style.backgroundColor = 'red';
		startButton.style.color = 'white';
		startButton.style.textDecoration = 'none';
		startButton.style.borderRadius = '10px';  // Điều chỉnh giá trị theo ý muốn
		startButton.style.padding = '8px 15px';  // Điều chỉnh giá trị theo ý muốn
		startButton.style.border = '2px solid white';  // Điều chỉnh giá trị theo ý muốn
		return startButton.outerHTML;
	}
}

function saveStudentInfo() {
  const username = document.getElementById('username').value;


  localStorage.setItem('username', username);

}
