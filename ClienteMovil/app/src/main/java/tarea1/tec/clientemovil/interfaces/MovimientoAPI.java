package tarea1.tec.clientemovil.interfaces;

import java.util.List;

import tarea1.tec.clientemovil.models.Movimiento;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;


/**
 * Interface para envio de solicitud al API
 * @author Harold Espinoza
 * */

public interface MovimientoAPI {
    /**
     * Metodo tipo Get para obtener todos los movimientos
     * */
    @GET("api/movimiento/obtenermov")
    public Call<List<Movimiento>> find();
}
