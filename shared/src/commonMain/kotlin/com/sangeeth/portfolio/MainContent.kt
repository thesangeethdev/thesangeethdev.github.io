package com.sangeeth.portfolio

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.jetbrains.skia.paragraph.Alignment

@Composable
fun MainContent(
    section: String
) {
    Box(
        modifier = Modifier.fillMaxSize()
            .padding(24.dp),
        contentAlignment = androidx.compose.ui.Alignment.TopStart

    ) {
        when (section){
            "Summary" -> Text(text = "Summary", fontSize = 24.sp)
            "LinkedIn" -> Text(text = "LinkedIn", fontSize = 24.sp)
            "GitHub" -> Text(text = "Github", fontSize = 24.sp)
            "Certifications" -> Text(text = "Certifications", fontSize = 24.sp)
            "Google Play" -> Text(text = "Google Play", fontSize = 24.sp)
            "Experiences" -> Text(text = "Experiences", fontSize = 24.sp)
            else -> Text(text = "select a section")
        }
    }
}