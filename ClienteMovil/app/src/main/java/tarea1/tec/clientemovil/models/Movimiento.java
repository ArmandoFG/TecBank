package tarea1.tec.clientemovil.models;

public class Movimiento {
    private String NumTransaccion;
    private String Monto;
    //private String Tipo;
    //private String Descripcion;
    //private String[] Fecha;

    public String getNumTransaccion() {
        return NumTransaccion;
    }

    public void setNumTransaccion(String numTransaccion) {
        NumTransaccion = numTransaccion;
    }

    public String getMonto() {
        return Monto;
    }

    public void setMonto(String monto) {
        Monto = monto;
    }

    /*public String getTipo() {
        return Tipo;
    }

    public void setTipo(String tipo) {
        Tipo = tipo;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String[] getFecha() {
        return Fecha;
    }

    public void setFecha(String[] fecha) {
        Fecha = fecha;
    }*/
}
