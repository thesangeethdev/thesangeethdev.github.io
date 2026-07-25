package com.sangeeth.portfolio

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeContentPadding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.painterResource

import portfolio.shared.generated.resources.Res
import portfolio.shared.generated.resources.compose_multiplatform

@Composable
@Preview
fun App() {
    MaterialTheme {
        Column(
            modifier = Modifier
                .background(Color(0xFFFFFEB4))
                .safeContentPadding()
                .fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            RetroHeader()
            Row(
                modifier = Modifier
                    .fillMaxWidth().padding(horizontal = 50.dp, vertical = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {

                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxHeight()
                        .padding(end = 24.dp),
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = "Sangeeth",
                        style = MaterialTheme.typography.displayLarge.copy(
                            fontWeight = FontWeight.Bold,
                            fontSize = 70.sp
                        ),
                        color = Color.Black
                    )
                    Text(
                        text = "Amirthanathan",
                        style = MaterialTheme.typography.displayLarge.copy(
                            fontWeight = FontWeight.SemiBold,
                            fontSize = 50.sp
                        ),
                        color = Color.DarkGray,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )
                    Text(
                        text = "Moble Application Developer",
                        style = MaterialTheme.typography.titleLarge.copy(
                            fontSize = 35.sp
                        ),
                        color = Color(0xFF1A237E),
                        modifier = Modifier.padding(bottom = 12.dp)
                    )

                    Text(
                        text = "MSc AI and Robotics (Reading) . BEng Software Engineering - Second Upper",
                        style = MaterialTheme.typography.bodyLarge.copy(
                            fontSize = 25.sp,
                            color = Color(0xFF333333)
                        ),
                        modifier = Modifier.padding(bottom = 16.dp)
                    )

                    Text(
                        text = "Mobile Application Developer with 3+ years of experience building and delivering production-ready Android applications for fintech and GIS (web and mobile) solutions, serving environmental companies across the US and Sri Lanka.",
                        style = MaterialTheme.typography.bodyMedium.copy(
                            fontSize = 20.sp,
                            lineHeight = 22.sp,
                            color = Color(0xFF444444),

                            ),
                    )

                    Row(
                        horizontalArrangement = Arrangement.spacedBy(16.dp)
                    ) {
                        Button(
                            onClick = {},
                            colors = ButtonDefaults.buttonColors(
                                contentColor = Color(0xFF0D47A1)
                            )
                        ) {
                            Text("Get in Touch")
                        }

                        OutlinedButton(
                            onClick = {},
                            border = BorderStroke(1.dp, Color(0xFF0D47A1))
                        ) {
                            Text("Portfolio", color = Color(0XFF0D47A1))
                        }
                    }
                }

                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxHeight()
                        .padding(start = 24.dp),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Box(
                        modifier = Modifier
                            .size(250.dp)
                            .background(
                                color = Color.LightGray,
                                shape = CircleShape,
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Text("Avatar", color = Color.White)
                    }
                    Spacer(modifier = Modifier.height(16.dp))

                    Row(
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        repeat(5) {
                            Box(
                                modifier = Modifier
                                    .size(100.dp)
                                    .background(color = Color.Gray, shape = RoundedCornerShape(8.dp)),
                                contentAlignment = Alignment.Center
                                ){
                                Text("Tech", color = Color.White, fontSize = 10.sp)

                            }
                        }
                    }
                }

            }
        }
    }
}