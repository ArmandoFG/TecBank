package tarea1.tec.clientemovil.models;

/**
 * Clase para definir los movimientos
 * @author Harold Espinoza
 * @author Armando Fallas
 * */
public class Movimiento {
    private int numtran;
    private int monto;
    private String tipo;
    private String descripcion;
    private String fecha;

    /**
     * Metodo que obtiene el numero de transaccion
     * @return numero de transaccion
     * */
    public int getNumtran() {
        return numtran;
    }

    /**
     * Metodo que pone un valor al numero de transaccion
     * @param numtran numero de transaccion
     * */
    public void setNumtran(int numtran) {
        this.numtran = numtran;
    }

    /**
     * Metodo que obtiene el monto del movimiento
     * @return monto de transaccion
     * */
    public int getMonto() {
        return monto;
    }

    /**
     * Metodo que pone un valor al monto del movimiento
     * @param monto monto del movimiento
     * */
    public void setMonto(int monto) {
        this.monto = monto;
    }

    /**
     * Metodo que obtiene el tipo de movimiento
     * @return tipo de transaccion
     * */
    public String getTipo() {
        return tipo;
    }

    /**
     * Metodo que pone un valor al tipo de movimiento
     * @param tipo tipo de movimiento
     * */
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    /**
     * Metodo que obtiene la descripcion del movimiento
     * @return descripcion de la transaccion
     * */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Metodo que pone un valor a la descripcion del movimiento
     * @param descripcion tipo de movimiento
     * */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * Metodo que obtiene la fecha del movimiento
     * @return numero de transaccion
     * */
    public String getFecha() {
        return fecha;
    }

    /**
     * Metodo que pone un valor a la descripcion del movimiento
     * @param fecha fecha del movimiento
     * */
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
}
