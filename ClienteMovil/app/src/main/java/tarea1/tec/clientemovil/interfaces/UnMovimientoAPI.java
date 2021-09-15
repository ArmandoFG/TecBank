package tarea1.tec.clientemovil.interfaces;

import java.util.List;

import retrofit2.http.Body;
import retrofit2.http.POST;
import retrofit2.http.Path;
import tarea1.tec.clientemovil.models.Movimiento;

import retrofit2.Call;
import retrofit2.http.GET;

/**
 * Interface para los metodos de solicitudes del API
 * @author Harold Espinoza
 * */
public interface UnMovimientoAPI {

    /**
     * Metodo tipo Get para un movimiento
     * @param id numero de transaccion del movimiento deseado
     * */
    @GET("api/movimiento/obtenermov/{id}")
    public Call<Movimiento> find(@Path("id") String id);

    /**
     * Metodo tipo Post para enviar un Movimiento
     * @param Body Objeto movimiento del movimiento a enviar
     * */
    @POST("api/movimiento/addmov")
    public Call<Movimiento> env(@Body Movimiento Body);
}
