using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Administracion.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovimientoController : ControllerBase
    {
        /*int[] t1 = new int[] { 1021, 450000, };
        int[] t2 = new int[] { 1022, 32000 };*/
        [HttpGet("ObtenerMov")]
        public List<Model.Mov> Get()
        {

            var movs = GetMovs();
            return movs;
            
        }
        [HttpGet("ObtenerMov/{id}")]
        public Model.Mov Getm(int id)
        {

            var movs = GetMovs();
            foreach (Model.Mov mov in movs){
                if (id == mov.Numtran) 
                {
                    return mov;
                }
            };
            return null;
            
        }


        public static List<Model.Mov> GetMovs() 
        {
            List<Model.Mov> movimientos = new List<Model.Mov> {
                new Model.Mov
                {
                    Numtran = 1,
                    Monto = 2,
                    Tipo = "Deposito",
                    Descripcion = "cuentas",
                    fecha = "10may2021"

                },
                new Model.Mov
                {
                    Numtran = 2,
                    Monto = 3,
                    Tipo = "Retiro",
                    Descripcion = "cuentas",
                    fecha = "11may2021"

                },
                };
            return movimientos;
        }

    }
}
