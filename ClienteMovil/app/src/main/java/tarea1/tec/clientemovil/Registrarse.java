package tarea1.tec.clientemovil;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import tarea1.tec.clientemovil.ui.login.LoginActivity;

/**
 * Clase para la pantalla de registro
 * @author Armando Fallas
 * */
public class Registrarse extends AppCompatActivity {

    /**
     * Metodo que inicializa la pantalla de registro
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_registrarse);



        //Se llama a la barra de herramientas por su id y mediante un metodo
        //que determina cuando se presiona el boton de regreso cierra la ventana actual y se devueve al inicio

        Toolbar tool = findViewById (R.id.toolbar2);
        tool.setNavigationOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(final View view) {
                Intent volver = new Intent(Registrarse.this, LoginActivity.class);
                startActivity (volver);
            }
        });




    }

    /**
     * Metodo que registra un nuevo usuario
     * */
    public void boton_afiliar(View view){
        EditText contraseña1 = findViewById (R.id.contraseñaRegistro);
        EditText contraseña2 = findViewById (R.id.confirmarContraseña);
        EditText nombre_registro = findViewById (R.id.nombreregistro);
        if(contraseña1.getText ().toString ().equals (contraseña2.getText ().toString ()) && contraseña1.getText ().toString ().length () > 0 && contraseña2.getText ().toString ().length () > 0){
            if(nombre_registro.getText ().toString ().length () > 0){
                Intent volver = new Intent(Registrarse.this, LoginActivity.class);
                startActivity (volver);
            }else{
                final AlertDialog.Builder alert = new AlertDialog.Builder(Registrarse.this);
                alert.setMessage ("No se asignó un nombre de usuario").setCancelable (false).setPositiveButton ("Ok", new DialogInterface.OnClickListener () {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Intent refrescar = new Intent(Registrarse.this, Registrarse.class);
                        startActivity (refrescar);
                    }
                });
                AlertDialog Alerta = alert.create ();
                Alerta.setTitle ("Error");
                Alerta.show ();
            }

        }else{
            AlertDialog.Builder alert = new AlertDialog.Builder(Registrarse.this);
            alert.setMessage ("Las contraseñas no coinciden").setCancelable (false).setPositiveButton ("Ok", new DialogInterface.OnClickListener () {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    Intent refrescar = new Intent(Registrarse.this, Registrarse.class);
                    startActivity (refrescar);
                }
            });
            AlertDialog Alerta = alert.create ();
            Alerta.setTitle ("Error");
            Alerta.show ();
        }
    }








}
