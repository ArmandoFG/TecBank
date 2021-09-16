package tarea1.tec.clientemovil.ui.login;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import tarea1.tec.clientemovil.R;
import tarea1.tec.clientemovil.Registrarse;
import tarea1.tec.clientemovil.principal;

/**
 * Clase para la ventana inicial de inicio de sesion
 * @author Armando Fallas
 * */
public class LoginActivity extends AppCompatActivity {


    EditText user;
    EditText pswd;

    /**
     * Metonodo que inicializa la ventana inicial
     * */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_login);
        user = findViewById(R.id.username);
        pswd =findViewById(R.id.password);


    }

    /**
     * Metodo que cambia a la pantalla de regristro
     * */
    public void Ini_Registro(View view){
        Intent Registro = new Intent(this, Registrarse.class);
        startActivity (Registro);
    }

    /**
     * Metodo que cambia a la pantalla principal
     * */
    public void Ini_Principal(View view){
        Intent principal = new Intent(this, principal.class);

        if (user.getText().toString().equals("admin") & pswd.getText().toString().equals("12345") ){
            startActivity (principal);

        }else{
            Toast.makeText(LoginActivity.this, "Usuario o contraseña incorrecto", Toast.LENGTH_SHORT).show();
            user.setText("");
            pswd.setText("");
        }



    }
}
