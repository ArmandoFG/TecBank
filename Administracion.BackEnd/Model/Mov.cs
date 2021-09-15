using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Administracion.BackEnd.Model
{

    /**
     * Clase para definir los movimientos 
     * @author Harold Espinoza
     */
    public class Mov
    {
        public int Numtran { get; set; }
        public int Monto { get; set; }
        public string Tipo { get; set; }
        public string Descripcion { get; set; }
        public string fecha { get; set; }
    }
}
