//OBJETO LITERAL
const Mercedes = {
    Nombre : "Mercedes",
    Apellido : "Alca",
    Edad : 20,
    CursosAprobados : ["TPW","DG",],

//CREAMOS UN METODO LLAMADO APROBAR CURSO

    AprobarCurso: function (NuevoCurso){
        this.CursosAprobados.push(NuevoCurso);
    },
}
//Mercedes.cursosAprobados.push("AR");
const Flora = {
    Nombre: "Flora",
    Apellido: "Mamani",
    Edad: 22,
    CursosAprobados: ["TPW","DG",],
    
    //CREAMOS UN METODO LLAMADO APROBARCURSO
    //AprobarCurso: function (NuevoCurso){
        //this.CursosAprobados.push(NuevoCurso);
        //}
    }
    
    //crear un prototipo a partir del ol
    function Estudiante(Nombre,Apellido,Edad,cursosAprobados){
        this.Nombre= Nombre;
        this.Apellido= Apellido;
        this.Edad= Edad;
        this.cursosAprobados= cursosAprobados;
    }
    //prototipo estudiante
    Estudiante.prototype.Aprobarcurso=function(NuevoCurso){
        this.cursosAprobados.push(NuevoCurso);
    }
    //instanciar alex
    const alex= new Estudiante(
        "alex",
        "juli",
        30,
        ["Progracion Web","Animacion de Graficos",],
    );
