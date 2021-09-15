package tarea1.tec.clientemovil;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import tarea1.tec.clientemovil.ui.login.LoginActivity;

/**
 * Clase para la pantalla de carga
 * @author Armando Fallas
 * */
public class pantalla_carga extends AppCompatActivity {

    /**
     * Metodo que inicializa la interfaz
     *
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);

        Intent intent = new Intent(this, LoginActivity.class);
        startActivity(intent);
        finish();
    }
}
