using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Permissions;

using System.Threading.Tasks;


namespace Administracion.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovimientoController : ControllerBase
    {
        private static string _path = @"Controllers/movsj.json";
        

        [HttpGet("ObtenerMov")]
        public List<Model.Mov> Get()
        {
            var movs = GetMovsJsonFromFile();
            //var movs = GetMovs();
            return movs;

        }
        [HttpGet("ObtenerMov/{id}")]
        public Model.Mov Getm(int id)
        {

            var movs = GetMovsJsonFromFile();
            foreach (Model.Mov mov in movs) {
                if (id == mov.Numtran)
                {
                    return mov;
                }
            };
            return null;

        }

        [HttpPost("addmov")]    
        public int addmovimiento(Model.Mov mov) 
        {

            string movsFromFile;
            using (var reader = new StreamReader(_path))
            {
                movsFromFile = reader.ReadToEnd();
            }

            var movs = JsonConvert.DeserializeObject<List<Model.Mov>>(movsFromFile);

            movs.Add(mov);

            string movsJson = JsonConvert.SerializeObject(movs.ToArray(), Formatting.Indented);

            System.IO.File.WriteAllText(_path, movsJson);

            return 1;
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

        public static List<Model.Mov> GetMovsJsonFromFile() 
        {
            string movsFromFile;
            using (var reader = new StreamReader(_path)) 
            {
                movsFromFile = reader.ReadToEnd();
            }

            var movs = JsonConvert.DeserializeObject<List<Model.Mov>>(movsFromFile);
            return movs;

        }


    }
}
