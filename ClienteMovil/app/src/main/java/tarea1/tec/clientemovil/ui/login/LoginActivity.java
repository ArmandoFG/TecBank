package tarea1.tec.clientemovil.ui.login;

import android.app.Activity;

import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.annotation.StringRes;
import androidx.appcompat.app.AppCompatActivity;

import android.text.Editable;
import android.text.TextWatcher;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

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
