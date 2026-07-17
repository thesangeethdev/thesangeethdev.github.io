package com.sangeeth.portfolio

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun RetroHeader(){
    Row (
        modifier = Modifier.fillMaxWidth()
            .padding(horizontal = 50.dp, vertical = 30.dp).height(80.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ){
        Text(
            text = "TheSangeethDev",
            style = MaterialTheme.typography.headlineSmall,
            color = Color(0xFF003A3A),
            fontWeight = FontWeight.Bold,
            fontSize = 30.sp
        )

        Row (
            horizontalArrangement = Arrangement.spacedBy(24.dp),
            verticalAlignment = Alignment.CenterVertically
        ){
            NavItem("Home", onClick = {})
            NavItem("Apps", onClick = {})
            NavItem("Blog", onClick = {})
            NavItem("Contact Me", onClick = {})
        }
    }
}