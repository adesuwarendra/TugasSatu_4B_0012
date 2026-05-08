const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){

    if(inputValue.value === ""){
        alert("Input tidak boleh kosong")
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.addEventListener("click", function() {
    daftarTugas.removeChild(listbaru);
    });

    const btnEdit = document.createElement("button1");
    btnEdit.innerHTML = "Edit";

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);
    listbaru.appendChild(btnHapus);

    inputValue.value ="";
    inputValue.focus();

});


