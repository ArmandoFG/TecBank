using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Permissions;

using System.Threading.Tasks;

/*
 * Controlador de los movimientos
 * @author Harold Espinoza
 * 
 */
namespace Administracion.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovimientoController : ControllerBase
    {
        private static string _path = @"Controllers/movsj.json";
        

        /**
         * Metodo de tipo Get para obtener una lista de todos los movimientos realizados
         * @return movs Lista de movimientos
         */
        [HttpGet("ObtenerMov")]
        public List<Model.Mov> Get()
        {
            var movs = GetMovsJsonFromFile();
            //var movs = GetMovs();
            return movs;

        }

        /**
         * Metodo de tipo Get que obtiene un movimiento especifico segun el numero de transaccion
         * @param id numero de la transaccion que se busca
         * @return mov movimiento que se solicito
         * @return null en caso de no encontrar el movimiento
         */
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

        /**
         * Metodo de tipo Post que se encarga de introducir un nuevo movimiento
         * @param mov Recibe un obtejo de tipo movimiento que se desea incluir
         * 
         */
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


        /**
         * Metodo que crea una lista de objetos de tipo movimiento
         * El metodo tiene como fin usarse para pruebas sin necesidad de leer un archivo o incluir una base de datos
         * @return movimientos Una lista de movimientos predeterminada
         */
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

        /**
         * Metodo que realiza la lectura de un archivo json para obtener la lista de movimientos
         * @return movs Lista de movimientos leidos
         */
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
