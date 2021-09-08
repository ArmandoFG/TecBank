package tarea1.tec.clientemovil.ui.login;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import tarea1.tec.clientemovil.R;
import tarea1.tec.clientemovil.Registrarse;
import tarea1.tec.clientemovil.principal;

public class LoginActivity extends AppCompatActivity {


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_login);


    }

    public void Ini_Registro(View view){
        Intent Registro = new Intent(this, Registrarse.class);
        startActivity (Registro);
    }

    public void Ini_Principal(View view){
        Intent principal = new Intent(this, principal.class);
        startActivity (principal);
    }
}
