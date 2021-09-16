package tarea1.tec.clientemovil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import tarea1.tec.clientemovil.interfaces.MovimientoAPI;
import tarea1.tec.clientemovil.interfaces.UnMovimientoAPI;
import tarea1.tec.clientemovil.models.Movimiento;

/**
 * Clase de la pantalla de movimientos
 * @author Armando Fallas
 * @author Harold Espinoza
 *
 * */
public class actividad_movimientos extends AppCompatActivity {

    TextView textmov1;
    Button btnmovs;
    Button btnconsulta;
    EditText consultaId;
    static String BASEURL = "http://192.168.1.3:8081/";

    /**
     * Metodo que inicializa la actividad, es decir, la interfaz
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_actividad_movimientos);

        consultaId =findViewById(R.id.TextID);

        textmov1=findViewById(R.id.textmov1);
        textmov1.setText("");
        textmov1.setMovementMethod(new ScrollingMovementMethod());

        btnmovs=findViewById(R.id.Bmovs);

        btnmovs.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                find();
            }
        });

        btnconsulta=findViewById(R.id.Consulta);

        btnconsulta.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                movimiento(consultaId.getText().toString());
            }
        });


        Toolbar tool = findViewById (R.id.toolbar);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(actividad_movimientos.this, principal.class);
                startActivity (volver);
            }

        });

    }

    /**
     * Metodo que envia una solicitud tipo Get al API para obtener un movimiento a partir de su numero de transaccion
     * @param id numero de la transaccion que se desea buscar
     *
     * */
    private void movimiento(String id)
    {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(BASEURL)
                //Retrofit retrofit = new Retrofit.Builder().baseUrl("https://jsonplaceholder.typicode.com/")
                .addConverterFactory(GsonConverterFactory.create()).build();

        UnMovimientoAPI UnmovimientoAPI=retrofit.create(UnMovimientoAPI.class);
        Call<Movimiento> call=UnmovimientoAPI.find(id);
        call.enqueue(new Callback<Movimiento>() {
            @Override
            public void onResponse(Call<Movimiento> call, Response<Movimiento> response) {
                try
                {
                    String listadoMovs = "";
                    //Toast.makeText(actividad_movimientos.this, "res"+response.body(), Toast.LENGTH_SHORT).show();
                    if(response.isSuccessful()){
                        //Toast.makeText(actividad_movimientos.this, "conectado", Toast.LENGTH_SHORT).show();
                        Movimiento m=response.body();

                            listadoMovs += "Numero de transaccion: "+ m.getNumtran() + "\n";
                            listadoMovs += "Monto: "+ m.getMonto() + "\n";
                            listadoMovs += "Tipo: "+ m.getTipo() + "\n";
                            listadoMovs += "Descripcion: "+ m.getDescripcion() + "\n";
                            listadoMovs += "Fecha: "+ m.getFecha() + "\n";
                            listadoMovs += "\n";


                        textmov1.setText(listadoMovs);

                    }

                }catch (Exception ex){
                    Toast.makeText(actividad_movimientos.this, ex.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Movimiento> call, Throwable t) {
                Toast.makeText(actividad_movimientos.this, "Error de conexion", Toast.LENGTH_SHORT).show();
            }
        });
    }


    /**
     * Metodo que envia una solicitud de tipo Get al API para obtener el listado de los movimientos de la cuenta
     * */
    private void find()
    {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(BASEURL)
        //Retrofit retrofit = new Retrofit.Builder().baseUrl("https://jsonplaceholder.typicode.com/")
                .addConverterFactory(GsonConverterFactory.create()).build();

        MovimientoAPI movimientoAPI=retrofit.create(MovimientoAPI.class);
        Call<List<Movimiento>> call=movimientoAPI.find();
        call.enqueue(new Callback<List<Movimiento>>() {
            @Override
            public void onResponse(Call<List<Movimiento>> call, Response<List<Movimiento>> response) {
                try
                {
                    String listadoMovs = "";
                    //Toast.makeText(actividad_movimientos.this, "res"+response.body(), Toast.LENGTH_SHORT).show();
                    if(response.isSuccessful()){
                        //Toast.makeText(actividad_movimientos.this, "conectado", Toast.LENGTH_SHORT).show();
                        List<Movimiento> m=response.body();
                        for (Movimiento mov:m) {
                            listadoMovs += "Numero de transaccion: "+ mov.getNumtran() + "\n";
                            listadoMovs += "Monto: "+ mov.getMonto() + "\n";
                            listadoMovs += "Tipo: "+ mov.getTipo() + "\n";
                            listadoMovs += "Descripcion: "+ mov.getDescripcion() + "\n";
                            listadoMovs += "Fecha: "+ mov.getFecha() + "\n";
                            listadoMovs += "\n";


                        }
                        textmov1.setText(listadoMovs);

                    }

                }catch (Exception ex){
                    Toast.makeText(actividad_movimientos.this, ex.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Movimiento>> call, Throwable t) {
                Toast.makeText(actividad_movimientos.this, "Error de conexion", Toast.LENGTH_SHORT).show();
            }
        });
    }

}
