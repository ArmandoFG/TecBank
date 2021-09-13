package tarea1.tec.clientemovil.models;

public class Movimiento {
    private int numtran;
    private int monto;
    private String tipo;
    private String descripcion;
    private String fecha;

    public int getNumtran() {
        return numtran;
    }

    public void setNumtran(int numtran) {
        this.numtran = numtran;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
}
